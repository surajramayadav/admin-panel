
import { Button, Checkbox, FormControlLabel } from '@mui/material'
import LoginImg from '../../assets/images/undraw_website_u6x8.png'
import CustomInput from '../../components/input/input'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const validateLogin = () => {
        navigate("/", { state: { key: "value" } })
    }
    return (
        <div >
            <div style={{ display: "flex", height: "100vh" }}>
                <div style={{ flex: 0.7, textAlign: 'center' }}>
                    <img src={LoginImg} style={{ width: "100%", }} />
                </div>
                <div style={{ flex: 0.3, alignContent: 'center', }}>
                    <div style={{ width: "100%", }}>
                        <h3 style={{ width: "100%", lineHeight: 1.5 }}>Please sign-in to your account and start the adventure</h3>
                        <CustomInput title='Username' />
                        <div style={{ marginTop: 20 }} />
                        <CustomInput title='Password' />
                        <div style={{ marginTop: 20 }} />
                        <FormControlLabel control={<Checkbox />} label="Remember Me" />
                        <div style={{ marginTop: 20 }} />
                        <Button
                            onClick={() => validateLogin()}
                            variant="contained" style={{ width: "80%", padding: 10, backgroundColor: "#7366F0" }}>Sign in</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
