/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddVolunteerMutation } from "@/redux/api/api";
import toast from "react-hot-toast";

const VolunteerForm = () => {
  const [addVolunteer] = useAddVolunteerMutation();

  const handleVolunteer = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const image = form.img.value;

    const volunteerData = { name, email, phone, image };
    try {
      addVolunteer(volunteerData);
      toast.success(`${name} Now You are a Volunteer `);
      form.reset();
    } catch (err) {
      toast.error("Failed to create volunteer");
      form.reset();
    }
  };
  return (
    <form className="mt-4 sm:mt-6 md:mt-10" onSubmit={handleVolunteer}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input
            required
            type="text"
            name="name"
            className="peer block w-full appearance-none border-0 border-b border-purple-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-300">
            Your name
          </label>
        </div>
        <div className="relative z-0">
          <input
            required
            type="email"
            name="email"
            className="peer block w-full appearance-none border-0 border-b border-purple-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-300">
            Your Email
          </label>
        </div>
        <div className="relative z-0">
          <input
            required
            type="number"
            name="phone"
            className="peer block w-full appearance-none border-0 border-b border-purple-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-300">
            Your Phone
          </label>
        </div>
        <div className="relative z-0">
          <input
            required
            type="url"
            name="img"
            className="peer block w-full appearance-none border-0 border-b border-purple-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-300">
            Image Link
          </label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea
            name="message"
            rows={5}
            className="peer block w-full appearance-none border-0 border-b border-purple-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
            placeholder=" "
          ></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-300">
            Your message
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 rounded-md border border-purple-500 btn  px-10 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default VolunteerForm;
