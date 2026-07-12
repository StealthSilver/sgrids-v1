import React from 'react'

export interface CybersecureLayersSectionProps {}

const layers = [
  {
    label: 'OT / Field Layer',
    cells: [
      {
        title: 'Device Hardening',
        description: 'Inverters, BMS, relays, meters secured at device level.',
      },
      {
        title: 'VLAN Segmentation',
        description: 'Field networks isolated from control and enterprise zones.',
      },
      {
        title: 'Protocol Security',
        description: 'Secure Modbus, DNP3, and OPC UA communication.',
      },
      {
        title: 'Anomaly Detection',
        description: 'Continuous monitoring for unusual OT communication patterns.',
      },
    ],
  },
  {
    label: 'Control / Edge Layer',
    cells: [
      {
        title: 'Firewall Rules',
        description: 'Next-gen, zone-based firewall enforcement.',
      },
      {
        title: 'EMS / SCADA Hardening',
        description: 'Secure configuration management for control systems.',
      },
      {
        title: 'Signed Configurations',
        description: 'Cryptographically signed config changes tamper evident.',
      },
      {
        title: 'Edge Encryption',
        description: 'Encrypted telemetry at the edge before transmission.',
      },
    ],
  },
  {
    label: 'Cloud Sync Layer',
    cells: [
      {
        title: 'One-Way Data Bridge',
        description: 'OT fully isolated from cloud non-intrusive data sync.',
      },
      {
        title: 'Encrypted Telemetry',
        description: 'End-to-end encryption for all cloud-bound data flows.',
      },
      {
        title: 'API Security',
        description: 'Token-based authentication for all external integrations.',
      },
      {
        title: 'CERT Reporting',
        description: 'Report incidents to CSIRT-Power and RE-CERT within 6 hours.',
      },
    ],
  },
  {
    label: 'Access & Governance',
    cells: [
      {
        title: 'Role-Based Access',
        description: 'Operator, Supervisor, Engineer, Admin, Remote Monitor.',
      },
      {
        title: 'MFA / SSO',
        description: 'Multi-factor and single sign-on across all platform layers.',
      },
      {
        title: 'Two-Person Confirmation',
        description: 'Critical SCADA and EMS operations require dual approval.',
      },
      {
        title: 'Immutable Audit Logs',
        description: 'Every control action, setpoint change, and login recorded.',
      },
    ],
  },
] as const

const CybersecureLayersSection: React.FC<CybersecureLayersSectionProps> = () => {
  return (
    <section id="security-layers" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="hidden overflow-hidden rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] shadow-[0px_7.72px_9.64px_0px_#FF6A0026] md:block">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[12%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
            </colgroup>
            <tbody>
              {layers.map((layer, rowIndex) => {
                const isLastRow = rowIndex === layers.length - 1

                return (
                  <tr key={layer.label}>
                    <th
                      scope="row"
                      className={`bg-[#141B3D] px-4 py-5 text-left align-middle lg:px-5 lg:py-6 ${
                        isLastRow ? '' : 'border-b border-[#E8C4A0]'
                      }`}
                    >
                      <span className="block [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.3] tracking-[-0.01rem] text-white lg:text-[0.875rem]">
                        {layer.label}
                      </span>
                    </th>

                    {layer.cells.map((cell) => (
                      <td
                        key={cell.title}
                        className={`border-l border-[#E8C4A0] px-4 py-5 align-top lg:px-5 lg:py-6 ${
                          isLastRow ? '' : 'border-b border-[#E8C4A0]'
                        }`}
                      >
                        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] lg:text-[0.875rem]">
                          {cell.title}
                        </p>
                        <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.4] text-[#7F7F7F] lg:text-[0.75rem]">
                          {cell.description}
                        </p>
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="overflow-hidden rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] shadow-[0px_7.72px_9.64px_0px_#FF6A0026]"
            >
              <div className="bg-[#141B3D] px-4 py-3.5">
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.25] text-white">
                  {layer.label}
                </p>
              </div>
              <div className="divide-y divide-[#E8C4A0]">
                {layer.cells.map((cell) => (
                  <div key={cell.title} className="px-4 py-4">
                    <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B]">
                      {cell.title}
                    </p>
                    <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#7F7F7F]">
                      {cell.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CybersecureLayersSection
