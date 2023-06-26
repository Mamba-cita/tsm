import { FaTrash } from 'react-icons/fa';
export default function ClientRow({ client }) {
  return (
    <tr>
        <td>{ client.id}</td>
        <td>{ client.name}</td>
        <td>{ client.account_no}</td>
        <td>{ client.email}</td>
        <td>{ client.address}</td>
        <td>
            <button className="btn btn-danger btn-sm">
                <FaTrash />
            </button>
        </td>

    </tr>
  )
}
