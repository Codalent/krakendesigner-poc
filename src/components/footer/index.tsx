import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-brand-blue-500 section--sm text-white">
      <div className="container--boxed">
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-between">
          <div>
            <Image
              src="/images/logo-inverse.png"
              alt=""
              width={170}
              height={35}
            />
            <p className="text--sm mt-1">
              Copyright © 2017-{new Date().getFullYear()} KRAKEND S.L
            </p>
          </div>
          <div>
            <p className="font-light">
              KrakenD: The <strong>Ultra-High performance</strong> API Gateway
              with middlewares
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
