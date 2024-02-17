import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);

  return (
    <div className=" max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl capitalize">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <div className=" w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.rest.profilePicture}
            alt={currentUser.rest.username}
            className=" rounded-full w-full h-full border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.rest.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.rest.email}
        />
        <TextInput type="password" id="password" placeholder="Pasword" />
        <Button type="submit" gradientDuoTone={"purpleToBlue"} outline>
          Update
        </Button>
      </form>
      <div className=" text-red-500 flex justify-between mt-5 px-5">
        <span className=" cursor-pointer">Delete Account</span>
        <span className=" cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}