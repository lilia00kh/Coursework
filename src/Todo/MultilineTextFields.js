import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TimePickers from "./TimePickers";
import MaterialUIPickers from "./MaterialUIPickers";
import ContainedButtons from "./ContainedButtons";
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h1>Купити квитки</h1>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
            </div>
            <div>
                <TimePickers/>
                <TimePickers/>
                <TimePickers/>
            </div>
            <ContainedButtons/>

            {/*<MaterialUIPickers/>*/}
        </form>
    );
}
