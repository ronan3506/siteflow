import { useState } from "react";
import imgDelivery from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";
import imgSite from "../../imports/4ApprovalDetailMobile-1/59a9c517fb11ea105e061b3f8e152833fd21db43.png";

type DeliveryStatus = "pending" | "in_transit" | "arrived" | "delayed";

interface Material {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  vendor: string;
  status: DeliveryStatus;
}

const INITIAL_MATERIALS: Material[] = [
  { id: "cement", name: "Cement Bags", quantity: "40", unit: "bags", vendor: "Ramco Cements", status: "pending" },
  { id: "steel", name: "Reinforcement Steel", quantity: "2", unit: "tonnes", vendor: "SAIL India", status: "in_transit" },
  { id: "hvac", name: "HVAC Ducting", quantity: "20", unit: "metres", vendor: "Voltas Ltd.", status: "delayed" },
  { id: "paint", name: "Paint Stock", quantity: "50", unit: "litres", vendor: "Asian Paints", status: "pending" },
];

const STATUS_CONFIG: Record<DeliveryStatus, { label: string; bg: string; color: string; dot: string }> = {
  pending: { label: "PENDING", bg: "#f5f3f1", color: "#6b5e55", dot: "#c4bab4" },
  in_transit: { label: "IN TRANSIT", bg: "rgba(122,49,0,0.08)", color: "#7a3100", dot: "#7a3100" },
  arrived: { label: "ARRIVED", bg: "rgba(61,107,82,0.10)", color: "#3d6b52", dot: "#3d6b52" },
  delayed: { label: "DELAYED", bg: "rgba(198,40,40,0.08)", color: "#c62828", dot: "#c62828" },
};

function PanelHeader({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="sticky top-0 left-0 right-0 z-10 flex items-center"
      style={{ height: 56, backgroundColor: "#faf8f6", borderBottom: "1px solid #e6e1dc" }}
    >
      <button
        onClick={onBack}
        className="flex items-center h-full cursor-pointer active:opacity-70 transition-opacity"
        style={{ paddingLeft: 14 }}
      >
        <svg width="9" height="15" viewBox="0 0 9.09 15" fill="none">
          <path d="M9.09 1.59L3.18 7.5L9.09 13.41L7.5 15L0 7.5L7.5 0L9.09 1.59Z" fill="#7A3100" />
        </svg>
        <span
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 15, letterSpacing: "0.7px", color: "#7a3100", marginLeft: 14 }}
        >
          TODAY'S BOARD
        </span>
      </button>
    </div>
  );
}

function StatusPill({ status }: { status: DeliveryStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        backgroundColor: cfg.bg,
        borderRadius: 20,
        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: cfg.dot }} />
      <span
        className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
        style={{ fontSize: 8.5, letterSpacing: "0.5px", color: cfg.color }}
      >
        {cfg.label}
      </span>
    </div>
  );
}

function MaterialRow({
  material,
  last,
}: {
  material: Material;
  last: boolean;
}) {
  return (
    <div
      style={{
        padding: "13px 16px",
        borderBottom: last ? "none" : "1px solid #f0ece9",
      }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: 6 }}>
        <div style={{ flex: 1 }}>
          <p
            className="font-['Manrope:Medium',sans-serif] font-medium"
            style={{ fontSize: 14, color: "#1a1a1a", marginBottom: 3 }}
          >
            {material.name}
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#6b5e55" }}
          >
            {material.quantity} {material.unit} · {material.vendor}
          </p>
        </div>
        <StatusPill status={material.status} />
      </div>

      {/* Arrival progress bar */}
      <div style={{ marginTop: 10 }}>
        <div style={{ height: 4, backgroundColor: "#e6e1dc", borderRadius: 2, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width:
                material.status === "arrived"
                  ? "100%"
                  : material.status === "in_transit"
                  ? "55%"
                  : material.status === "delayed"
                  ? "20%"
                  : "0%",
              backgroundColor:
                material.status === "arrived"
                  ? "#3d6b52"
                  : material.status === "delayed"
                  ? "#c62828"
                  : "#7a3100",
              borderRadius: 2,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function MaterialDeliveryPanel({
  onBack,
  onMarkReceived,
}: {
  onBack: () => void;
  onMarkReceived: () => void;
}) {
  const [materials, setMaterials] = useState<Material[]>(INITIAL_MATERIALS);
  const [marked, setMarked] = useState(false);

  const arrivedCount = materials.filter((m) => m.status === "arrived").length;
  const delayedCount = materials.filter((m) => m.status === "delayed").length;
  const inTransitCount = materials.filter((m) => m.status === "in_transit").length;

  const handleMarkReceived = () => {
    // Mark in-transit items as arrived
    setMaterials((prev) =>
      prev.map((m) =>
        m.status === "in_transit" || m.status === "pending"
          ? { ...m, status: "arrived" as DeliveryStatus }
          : m
      )
    );
    setMarked(true);
    onMarkReceived();
  };

  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <PanelHeader onBack={onBack} />

      <div style={{ padding: "20px 20px 100px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          TODAY'S BOARD
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 4 }}
        >
          MATERIAL DELIVERY
        </p>

        {/* Overall status + zone */}
        <div className="flex items-center gap-[10px]" style={{ marginBottom: 20 }}>
          <div
            style={{
              backgroundColor: "#fff3e0",
              borderRadius: 6,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 10, letterSpacing: "0.5px", color: "#e65100" }}
            >
              PENDING
            </span>
          </div>
          <span
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#6b5e55" }}
          >
            East Terrace · ETA 11:00 AM
          </span>
        </div>

        {/* Stats row */}
        <div className="flex gap-[10px]" style={{ marginBottom: 20 }}>
          {[
            { label: "ARRIVED", value: arrivedCount, color: "#3d6b52", bg: "rgba(61,107,82,0.08)" },
            { label: "IN TRANSIT", value: inTransitCount, color: "#7a3100", bg: "rgba(122,49,0,0.07)" },
            { label: "DELAYED", value: delayedCount, color: "#c62828", bg: "rgba(198,40,40,0.08)" },
          ].map(({ label, value, color, bg }) => (
            <div key={label} className="flex-1 rounded-[12px]" style={{ padding: "11px 14px", backgroundColor: bg }}>
              <p
                className="font-['Manrope:Regular',sans-serif] uppercase"
                style={{ fontSize: 9, letterSpacing: "0.8px", color, marginBottom: 4 }}
              >
                {label}
              </p>
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold"
                style={{ fontSize: 22, color, letterSpacing: "-0.4px" }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Materials list */}
        <div className="bg-white border border-[#e6e1dc] rounded-[14px] overflow-hidden" style={{ marginBottom: 16 }}>
          {materials.map((m, i) => (
            <MaterialRow key={m.id} material={m} last={i === materials.length - 1} />
          ))}
        </div>

        {/* Delivery photo */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[14px]"
          style={{ marginBottom: 16, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55", marginBottom: 12 }}
          >
            DELIVERY REFERENCE
          </p>
          <div className="flex gap-[10px]">
            <div style={{ flex: 1.4, height: 90, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgDelivery} alt="Delivery" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div style={{ flex: 1, height: 90, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgSite} alt="Site" className="w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Delivery notes */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[14px]"
          style={{ marginBottom: 16, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55", marginBottom: 8 }}
          >
            DELIVERY NOTES
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
          >
            Steel and cement to be offloaded at East Gate. Driver must report to site office on arrival. HVAC ducting delivery rescheduled due to supplier delay — new ETA to be confirmed.
          </p>
        </div>

        {/* Contact person */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[14px]"
          style={{ padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55", marginBottom: 10 }}
          >
            CONTACT PERSON
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p
                className="font-['Manrope:Medium',sans-serif] font-medium"
                style={{ fontSize: 14, color: "#1a1a1a", marginBottom: 2 }}
              >
                Logistics Coordinator
              </p>
              <p
                className="font-['Manrope:Regular',sans-serif]"
                style={{ fontSize: 12, color: "#6b5e55" }}
              >
                Suresh Nair · +91 98400 12345
              </p>
            </div>
            <div
              className="flex items-center justify-center"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "rgba(122,49,0,0.08)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="#7a3100"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div
        className="sticky bottom-0 left-0 right-0"
        style={{
          padding: "12px 20px 24px",
          backgroundColor: "#fbf9f8",
          borderTop: "1px solid #e6e1dc",
        }}
      >
        <button
          onClick={handleMarkReceived}
          className="w-full flex items-center justify-center gap-[8px] cursor-pointer active:opacity-80 transition-opacity"
          style={{
            height: 52,
            backgroundColor: marked ? "#3d6b52" : "#7a3100",
            borderRadius: 14,
            transition: "background-color 0.2s ease",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
            style={{ fontSize: 13, letterSpacing: "0.6px", color: "white" }}
          >
            {marked ? "DELIVERY UPDATED" : "MARK AS RECEIVED"}
          </span>
        </button>
      </div>
    </div>
  );
}
