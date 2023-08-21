import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Modal({isOpen, setOpen, title, content, btnText, actionBtn}){
    if(isOpen){
        return(
            <div className="modal">
                <div className="modal-content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <div>
                        <SecondaryButton text="Cancelar" />
                        <PrimaryButton text={btnText} action={[actionBtn, !setOpen]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;