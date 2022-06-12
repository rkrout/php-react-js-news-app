
export default function EditAccountPage() {
    return (
        <form className="form">
            <div className="formTitle">EDIT ACCOUNT</div>

            <div className="formGroup">
                <label className="formLabel">Name</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <div className="formGroup">
                <label className="formLabel">Email</label>
                <input className="formInput" name="oldPassword"/>
            </div>

            <button className="btnFull">Save</button>
        </form>
    )
}