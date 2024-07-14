import ReactDOM from 'react-dom';
import { RxCheckCircled, RxExclamationTriangle } from "react-icons/rx";

const NotifyMessage = ({ message, state }) => {
  const notifyMessageContent = (
    <div className={(state == 'error' ? 'bg-red-500/45 text-red-900' : 'bg-emerald-500/45 text-emerald-900') + ' absolute bottom-4 left-4 p-3 rounded-md flex items-center gap-x-4 text-lg '}>
      {state == 'error' ?
        <RxExclamationTriangle  className="h-8 w-8 flex-none" />
        :
        <RxCheckCircled className="h-8 w-8 flex-none" />

      }

      <p>{message}</p>
    </div>
  );
  return ReactDOM.createPortal(notifyMessageContent, document.querySelector('main'));

};
export default NotifyMessage;
