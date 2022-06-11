
export default function SignUpOTPPage() {
    return (
        <form className="form">
            <div className="formTitle">SIGN UP</div>

            <div className="formGroup">
                <label className="formLabel">Name</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <button className="btnFull">Send OTP</button>
        </form>
    )
}