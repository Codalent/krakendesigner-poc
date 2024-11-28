import Input from "@/components/common/inputs/input";
import { RootState } from "@/store/slice";
import { updateConfig } from "@/store/slice/configSlice";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const config = useSelector((store: RootState) => store.config);
  const dispatch = useDispatch();

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string
  ) => {
    const { value } = e.target;
    dispatch(updateConfig({ key, value }));
  };

  return (
    <div className="space-y-6">
      <div className="border rounded shadow-sm border-t-4 border-t-brand-blue flex flex-col bg-white">
        <div className="px-4 py-3 flex items-center justify-between gap-4 min-h-20 sm:min-h-[auto]">
          <h2>HTTP Server settings</h2>
        </div>
        <div className="border-t p-2.5">
          <div className="grid grid-cols-12 gap-6 mt-4">
            <Input
              label="Name"
              name="name"
              onChange={(e) => handleInput(e, "name")}
              value={config.name}
              wrapperClassName="col-span-8"
              info="A friendly name, title, date, version or any other short description that helps you recognize this configuration when reporting to your metrics and traces systems."
            />

            <Input
              label="Port"
              name="port"
              onChange={(e) => handleInput(e, "port")}
              placeholder="8080"
              wrapperClassName="col-span-4"
              value=""
              info={
                <span>
                  Port where KrakenD listens to connections, defaults to{" "}
                  <code>8080</code>.
                </span>
              }
            />
          </div>
        </div>
      </div>
      <div className="border rounded shadow-sm border-t-4 border-t-brand-blue flex flex-col bg-white">
        <div className="px-4 py-3 flex items-center justify-between gap-4 min-h-20 sm:min-h-[auto]">
          <h2>Default Timeouts and TTL</h2>
        </div>
        <div className="border-t p-2.5">
          <p className="text--sm text-brand-neutral-700">
            All settings below are used across all backends unless overridden
            explicitly in each endpoint
          </p>
          <div className="grid gap-6 mt-4">
            <Input
              label="Backend Timeout"
              name="backend_timeout"
              onChange={(e) => handleInput(e, "timeout")}
              value={config.timeout}
              info={
                <p>
                  <strong>Default timeout</strong> for all connections against
                  your backends, including the time spent in the whole pipe.
                  This value can be overridden later on specific endpoints.
                </p>
              }
            />
            <Input
              label="Default Cache TTL"
              name="backend_timeout"
              onChange={(e) => handleInput(e, "cache_ttl")}
              value={config.cache_ttl}
              info={
                <div>
                  <p className="mb-2.5">
                    Value must be an integer expressing the number of seconds
                  </p>
                  <p>
                    The time the service considers the origin is still valid.
                    Applies to GET requests only. The service does not cache
                    anything but expedites the headers for proxies to do the
                    caching (e.g., a Varnish server, CDN, etc.).
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
