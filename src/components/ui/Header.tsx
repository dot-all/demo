import ContactButton from "./ContactButton";
import DropDownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <header className="w-11/12 xl:w-10/12 fixed left-1/2 -translate-x-1/2 flex flex-row-reverse h-12 top-4 md:top-14 gap-4 z-30 max-w-[1300px]">
      <DropDownMenu />
      <ContactButton />
    </header>
  )
}
