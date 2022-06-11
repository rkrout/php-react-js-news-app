
export default function ChangeEmailPage() {
    return (
        <form className="form">
            <div className="formTitle">OTP VERIFICATION</div>

            <div className="formGroup">
                <label className="formLabel">Enter OTP</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <button className="btnFull">Submit</button>
        </form>
    )
}