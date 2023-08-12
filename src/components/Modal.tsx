import { ModalProps } from "../essentials/Types"

const Modal = ({handleSubmit, heading, refModal}:ModalProps) =>{
    return(
        <dialog className="modal" ref={refModal}>
                <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{heading}</h3>
                    <p className="py-4">Click on ✕ button to continue</p>
                </form>
            </dialog>
    )
}

export default Modal