

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
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
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