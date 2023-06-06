import { useEffect, useState } from "react";

function Profile(){

    const [user, setUser] = useState();

    useEffect(() => {

        fetch('https://api.github.com/users/GabMoretti')
        .then((response) => response.json())
        .then((responseUserJson) => setUser(responseUserJson))

    }, [])

    return(
        <main>
            {user?.login}
            <img src={user?.avatar_url}/>
        </main>
    )

}

export default Profile; 