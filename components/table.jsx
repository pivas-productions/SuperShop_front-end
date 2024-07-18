
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
// import { fetchFilteredInvoices } from '@/app/lib/data';

export default function InvoicesTable({
  query,
  currentPage,
}) {
  const invoices = //await fetchFilteredInvoices(query, currentPage);
    [
        {
            id: '1',
            name: 'a'
        },
        {
            id: '2',
            name: 'Россия, Республика Крым, Симферополь, Киевская улица, 83'
        }
    ]
  return (
    <div className="mt-6 w-full flow-root">
      <div className=" min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="hidden min-w-full text-gray-900 md:table">
              {invoices?.map((invoice) => (
                <div
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg"
                >
                  <div className=" py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt />
                      <p>{invoice.name}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
