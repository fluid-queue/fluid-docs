import Layout from "@theme/Layout";
import "./fluid-queue-setup.scss";
import React, { useEffect, useRef, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

const BootstrapComponent = () => {
  const theme = useColorMode().colorMode;
  const [wasm, setWasm] = useState(null);
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const load = async () => {
      await import("bootstrap/dist/js/bootstrap.bundle.js");
      const wasm = await import(
        "../../fluid-queue-setup/wasm/pkg/fluid_queue_setup_wasm.js"
      );
      setWasm(wasm);
    };
    load();
  }, []);
  useEffect(() => {
    if (ref.current != null && wasm != null) {
      let app = wasm.renderAppTo(ref.current);
      return () => app.free();
    }
  }, [ref, wasm]);
  // TODO: implement SSR for fluid_queue_setup_wasm
  return (
    <div className="bootstrap-component" data-bs-theme={theme}>
      <div ref={ref} className="col-lg-6 mx-auto p-4 py-md-5"></div>
    </div>
  );
};

export default function SetupSPA(): JSX.Element {
  return (
    <Layout
      title="Configurator"
      description="fluid-queue Versions page listing all documented site versions"
    >
      <BootstrapComponent />
    </Layout>
  );
}
