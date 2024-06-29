import ReactDOM from 'react-dom';
import { RxCheckCircled, RxExclamationTriangle } from "react-icons/rx";

const NotifyMessage = ({ message, state }) => {
  const notifyMessageContent = (
    <div className={(state == 'error' ? 'bg-red-500/15 text-red-500' : 'bg-emerald-500/15 text-emerald-500') + ' absolute bottom-4 left-4 p-3 rounded-md flex items-center gap-x-2 text-sm '}>
      {state == 'error' ?
        <RxExclamationTriangle  className="h-4 w-4 flex-none" />
        :
        <RxCheckCircled className="h-4 w-4 flex-none" />

      }

      <p>{message}</p>
    </div>
  );
  return ReactDOM.createPortal(notifyMessageContent, document.querySelector('main'));

};
export default NotifyMessage;
