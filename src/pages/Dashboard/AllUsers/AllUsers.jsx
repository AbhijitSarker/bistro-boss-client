import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users');
            return response.json();
            //todo: fix this problem
        },
    });
    console.log(users)
    return (
        <div>
            users:{users.length}
        </div>
    );
};

export default AllUsers;