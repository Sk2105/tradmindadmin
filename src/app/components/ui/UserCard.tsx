

import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

const UserCard = ({ user }:{
    user: {
        id: number;
        role: string;
        phoneNo: string;
        address: string;
        name: string;
        email: string;
    }
}) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md mb-4">
            <div className="flex items-center">
              <LuUser className="text-4xl text-blue-600 m-2"/>
                <div>
                    <h2 className="text-[16px] font-semibold">{user.name}</h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                </div>
            </div>
            <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">View</button>
            </div>
        </div>
    );
}

export default UserCard