
export default function ChangeEmailOTPPage() {
    return (
        <form className="form">
            <div className="formTitle">CHANGE EMAIL</div>

            <div className="formGroup">
                <label className="formLabel">Password</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <div className="formGroup">
                <label className="formLabel">New Email</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <button className="btnFull">Send OTP</button>
        </form>
    )
}