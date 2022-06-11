import styes from "./ChangePasswordPage.module.css"

export default function SignUpPage() {
    return (
        <form className="form">
            <div className="formTitle">SIGN UP</div>

            <div className="formGroup">
                <label className="formLabel">Old Password</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <div className="formGroup">
                <label className="formLabel">New Password</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <div className="formGroup">
                <label className="formLabel">Confirm New Password</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <button className="btnFull">Change</button>
        </form>
    )
}