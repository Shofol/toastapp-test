import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const path = router.pathname;

  const menus = [
    {
      name: "Special",
      link: "/",
    },
    {
      name: "Menu",
      link: "/homeMenu",
    },
    {
      name: "Deserts",
      link: "/deserts",
    },
    {
      name: "Beverages",
      link: "/beverages",
    },
    {
      name: "Test",
      link: "/test",
    },
    {
      name: "Test2",
      link: "/test",
    },
  ];
  return (
    <div className="bg-tst-bg  rounded-br-2lg rounded-bl-2lg navbarShadow">
      <div className="flex py-8 px-4 justify-between">
        <div className="flex items-center">
          <Image
            src={"/resLogo.svg"}
            width={28}
            height={28}
            alt="Sacred Earth Cafe"
          />
          <h1 className="text-tst-scndry font-bold text-md ml-2 font-graphik">
            Sacred Earth Cafe
          </h1>
        </div>

        <div>
          <button className="p-2 mr-2 rounded-2lg iconButtonShadow">
            <Image
              src={"/record.svg"}
              width={18}
              height={18}
              alt="Sacred Earth Cafe"
            />
          </button>

          <button className="p-2 rounded-2lg iconButtonShadow">
            <Image
              src={"/tag.svg"}
              width={18}
              height={18}
              alt="Sacred Earth Cafe"
            />
          </button>
        </div>
      </div>
      <div className="max-h-10 overflow-y-hidden">
        <div className="flex flex-nowrap overflow-x-auto pb-5 font-poppins">
          {menus.map((menu, index) => {
            return (
              <Link
                key={menu.name}
                href={menu.link}
                className={
                  "text-gray-500 ml-4 pb-3 font-bold hover:text-tst-primary hover:border-b-2 hover:border-tst-primary " +
                  (path === menu.link
                    ? "border-b-2 border-tst-primary text-tst-primary"
                    : "")
                }
              >
                {menu.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
