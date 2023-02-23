export default function ProfileHeader({ title }) {
  return (
    <div className="mt-[45px] mb-[50px]">
      <h1 className="capitalize font-bold text-black text-[30px] leading-[45px]  ">
        {title}
      </h1>
    </div>
  );
}
