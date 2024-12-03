import IconDesignerPan from "@/public/icons/designer-pen.svg";
import KrakendLogo from "@/public/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { faFolderOpen, faCopy, faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: endpoints } = useSelector((state: any) => state.endpoints);
  const config = useSelector((state: any) => state.config);

  // Download config
  const downloadConfig = () => {
    const krakendConfig = { ...config };
    if (endpoints.length > 0) {
      krakendConfig["endpoints"] = endpoints;
    }

    const blob = new Blob([JSON.stringify(krakendConfig, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "krakend.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Opens KrakenD config new tab
  const openConfig = () => {
    const krakendConfig = { ...config };
    if (endpoints.length > 0) {
      krakendConfig["endpoints"] = endpoints;
    }

    const configWindow = window.open();
    configWindow?.document.write(
      `<pre>${JSON.stringify(krakendConfig, null, 2)}</pre>`
    );
    configWindow?.focus();
  };

  return (
    <header className="bg-brand-blue">
      <div>
        <nav aria-label="Global" className="flex items-center py-4">
          <div className="flex ml-10">
            <Link href="/" className="p-1.5">
              <span className="sr-only">KrakenD</span>
              <KrakendLogo width={157} height={31} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="ml-10">
            <button className="flex items-center text-white heading--h3">
              <IconDesignerPan />
              <span>Designer</span>
            </button>
          </div>
          <div className="hidden mr-10 lg:flex lg:flex-1 lg:justify-end lg:space-x-5">
            <button className="button--secondary">
              <FontAwesomeIcon icon={faFolderOpen} className="mr-1" />
              Open a local file <samp>(^O)</samp>
            </button>
            <button className="button--secondary" onClick={downloadConfig}>
              <FontAwesomeIcon icon={faCopy} className="mr-1" />
              Download config <samp>(^D)</samp>
            </button>
            <button className="button--secondary" onClick={openConfig}>
              <FontAwesomeIcon icon={faEye} className="mr-1" />
              View config <samp>(^E)</samp>
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
}
