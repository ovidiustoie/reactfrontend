import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import { AuthorDTO, AuthorRefDTO } from '@infrastructure/apis/client';
import { useAuthorApi } from "@infrastructure/apis/api-management";
import { Chip } from '@mui/material';





export const  AuthorsLookup = (props: {
    placeholder: string, 
    noOptionsText?: string, 
    fullWidth?: boolean,
    value: AuthorRefDTO[],
    onChange: (data: any) => void  
}) => {
    const placeholder = props.placeholder || '';
    const fullWidth = props.fullWidth || false;
    const noOptionsText = props.noOptionsText || '';
    const getAuthors = useAuthorApi().getAuthors; 
    const [currentValue, setCurrentValue] = React.useState<AuthorRefDTO[]>(props.value);
    React.useEffect(() => {
        setCurrentValue(props.value);
    }, [props.value]);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly AuthorRefDTO[]>([]);
    const fetch = React.useMemo(
        () =>
            debounce(
                (
                    request: { input: string },
                    callback: (results: AuthorRefDTO[]) => void,
                ) => {
                    getAuthors.query({
                       page: 1,
                       pageSize: 10,
                       search: request.input  
                    }).then((results) => {
                        if (results.errorMessage) {
                            callback([]);
                            return;
                        }
                        if (!results.response) {
                            callback([]);
                            return;
                        }
                        if (!results.response.data) {
                            callback([]);
                            return;
                        }
                        const data:  AuthorDTO[] = results.response.data;
                        const tData = data.map<AuthorRefDTO>((ii) => {
                            return { id: ii.id, fullName: ii.fullName}}
                        );
                        callback(tData)
                    });
                },
                400,
            ),
        [],
    );

    React.useEffect(() => {
        let active = true;

        fetch({ input: inputValue }, (results?: readonly AuthorRefDTO[]) => {
            if (active) {
                const newOptions: readonly AuthorRefDTO[] = [...(results || [])]
                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [inputValue, fetch]);

    return (
        <Autocomplete
            multiple = {true}
            fullWidth = {fullWidth}
            getOptionLabel={(option) =>
                option?.fullName || ''
            }
            renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={option.fullName}
                    {...getTagProps({ index })}
                  />
                ))
              }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={currentValue}
            isOptionEqualToValue ={
                (option, value) => {
                    return option.id === value.id;
                }
            }
            noOptionsText= {noOptionsText}
            onChange={(event: any, newValue: AuthorRefDTO[]) => {
                setCurrentValue(newValue);
                props.onChange(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue || '');
            }}
            renderInput={(params) => (
                <TextField {...params} placeholder={placeholder} variant="outlined"  />
            )}
            
        />
    );
};
