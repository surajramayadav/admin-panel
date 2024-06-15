import { TextField } from '@mui/material';
interface Props {
    title: string;
}

export default function CustomInput({ title }: Props) {
    return (
        <div>
            <TextField
                variant="outlined"
                label={title}
                style={{ width: "80%" }}
            />
        </div>
    )
}
