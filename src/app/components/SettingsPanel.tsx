import { useState } from "react";

function MenuScreenHeader({ onBack, label }: { onBack: () => void; label: string }) {
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
          {label}
        </span>
      </button>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p
      className="font-['Manrope:Regular',sans-serif] uppercase"
      style={{ fontSize: 10, letterSpacing: "1px", color: "#7a3100", marginBottom: 10, marginTop: 4 }}
    >
      {children}
    </p>
  );
}

function SettingsCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-white border border-[#e6e1dc] rounded-[14px]"
      style={{ marginBottom: 20, overflow: "hidden" }}
    >
      {children}
    </div>
  );
}

function ToggleRow({
  label,
  sub,
  value,
  onChange,
}: {
  label: string;
  sub?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ padding: "14px 16px", borderBottom: "1px solid #f0ece9" }}
    >
      <div>
        <p
          className="font-['Manrope:Medium',sans-serif] font-medium"
          style={{ fontSize: 14, color: "#1a1a1a" }}
        >
          {label}
        </p>
        {sub && (
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 11, color: "#6b5e55", marginTop: 2 }}
          >
            {sub}
          </p>
        )}
      </div>
      <button
        onClick={() => onChange(!value)}
        className="cursor-pointer transition-all"
        style={{
          width: 44,
          height: 26,
          borderRadius: 13,
          backgroundColor: value ? "#7a3100" : "#ddd",
          position: "relative",
          flexShrink: 0,
          transition: "background-color 0.2s ease",
        }}
        aria-pressed={value}
      >
        <div
          style={{
            position: "absolute",
            top: 3,
            left: value ? 21 : 3,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "white",
            transition: "left 0.2s ease",
            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          }}
        />
      </button>
    </div>
  );
}

function SelectRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ padding: "14px 16px", borderBottom: "1px solid #f0ece9" }}
    >
      <p
        className="font-['Manrope:Medium',sans-serif] font-medium"
        style={{ fontSize: 14, color: "#1a1a1a" }}
      >
        {label}
      </p>
      <div className="flex gap-[6px]">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="cursor-pointer transition-colors"
            style={{
              height: 28,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 8,
              backgroundColor: value === opt ? "#7a3100" : "#f5f3f1",
              border: value === opt ? "none" : "1px solid #e6e1dc",
            }}
          >
            <span
              className="font-['Manrope:Medium',sans-serif] font-medium"
              style={{ fontSize: 12, color: value === opt ? "white" : "#564239" }}
            >
              {opt}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ padding: "14px 16px", borderBottom: last ? "none" : "1px solid #f0ece9" }}
    >
      <p
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 13, color: "#6b5e55" }}
      >
        {label}
      </p>
      <p
        className="font-['Manrope:Medium',sans-serif] font-medium"
        style={{ fontSize: 13, color: "#1a1a1a" }}
      >
        {value}
      </p>
    </div>
  );
}

export function SettingsPanel({ onBack }: { onBack: () => void }) {
  const [language, setLanguage] = useState("English");
  const [pushNotifications, setPushNotifications] = useState(true);
  const [siteAlerts, setSiteAlerts] = useState(true);
  const [taskUpdates, setTaskUpdates] = useState(false);
  const [theme, setTheme] = useState("Light");

  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <MenuScreenHeader onBack={onBack} label="MENU" />

      <div style={{ padding: "20px 20px 56px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          PREFERENCES
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 24 }}
        >
          SETTINGS
        </p>

        {/* Language */}
        <SectionLabel>LANGUAGE</SectionLabel>
        <SettingsCard>
          <SelectRow
            label="App Language"
            value={language}
            options={["English", "ಕನ್ನಡ"]}
            onChange={setLanguage}
          />
          <div style={{ padding: "12px 16px", borderBottom: "none" }}>
            <p
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 11, color: "#b8afa9" }}
            >
              More regional languages coming soon
            </p>
          </div>
        </SettingsCard>

        {/* Notifications */}
        <SectionLabel>NOTIFICATIONS</SectionLabel>
        <SettingsCard>
          <ToggleRow
            label="Push Notifications"
            sub="Receive alerts on your device"
            value={pushNotifications}
            onChange={setPushNotifications}
          />
          <ToggleRow
            label="Site Alerts"
            sub="Issues and safety warnings"
            value={siteAlerts}
            onChange={setSiteAlerts}
          />
          <div style={{ padding: "14px 16px" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 14, color: "#1a1a1a" }}>
                  Task Updates
                </p>
                <p className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 11, color: "#6b5e55", marginTop: 2 }}>
                  Assignments and approvals
                </p>
              </div>
              <button
                onClick={() => setTaskUpdates(!taskUpdates)}
                className="cursor-pointer"
                style={{
                  width: 44, height: 26, borderRadius: 13,
                  backgroundColor: taskUpdates ? "#7a3100" : "#ddd",
                  position: "relative", flexShrink: 0,
                  transition: "background-color 0.2s ease",
                }}
              >
                <div style={{
                  position: "absolute", top: 3,
                  left: taskUpdates ? 21 : 3,
                  width: 20, height: 20, borderRadius: "50%",
                  backgroundColor: "white",
                  transition: "left 0.2s ease",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }} />
              </button>
            </div>
          </div>
        </SettingsCard>

        {/* Display */}
        <SectionLabel>DISPLAY</SectionLabel>
        <SettingsCard>
          <div style={{ padding: "14px 16px" }}>
            <div className="flex items-center justify-between">
              <p className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 14, color: "#1a1a1a" }}>
                Theme
              </p>
              <div className="flex gap-[6px]">
                <button
                  onClick={() => setTheme("Light")}
                  style={{
                    height: 28, paddingLeft: 10, paddingRight: 10, borderRadius: 8,
                    backgroundColor: theme === "Light" ? "#7a3100" : "#f5f3f1",
                    border: theme === "Light" ? "none" : "1px solid #e6e1dc",
                    cursor: "pointer",
                  }}
                >
                  <span className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 12, color: theme === "Light" ? "white" : "#564239" }}>Light</span>
                </button>
                <button
                  style={{
                    height: 28, paddingLeft: 10, paddingRight: 10, borderRadius: 8,
                    backgroundColor: "#f5f3f1", border: "1px solid #e6e1dc",
                    cursor: "default", opacity: 0.5,
                  }}
                  disabled
                >
                  <span className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 12, color: "#564239" }}>Dark</span>
                </button>
              </div>
            </div>
            <p className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 11, color: "#b8afa9", marginTop: 8 }}>
              Dark mode — coming soon
            </p>
          </div>
        </SettingsCard>

        {/* Account */}
        <SectionLabel>ACCOUNT</SectionLabel>
        <SettingsCard>
          <InfoRow label="Name" value="Arjun Singh" />
          <InfoRow label="Phone" value="+91 98765 43210" />
          <InfoRow label="Role" value="Contractor" />
          <InfoRow label="Project" value="Bengaluru Residential" last />
        </SettingsCard>

        {/* Logout */}
        <button
          className="w-full flex items-center justify-center cursor-pointer active:opacity-80 transition-opacity"
          style={{
            height: 50,
            backgroundColor: "rgba(198,40,40,0.08)",
            border: "1px solid rgba(198,40,40,0.18)",
            borderRadius: 14,
            gap: 8,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="#c62828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
            style={{ fontSize: 12, letterSpacing: "0.6px", color: "#c62828" }}
          >
            LOG OUT
          </span>
        </button>
      </div>
    </div>
  );
}
