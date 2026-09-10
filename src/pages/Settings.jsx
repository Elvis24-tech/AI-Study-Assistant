import {
    Settings as SettingsIcon,
    User,
    Bell,
    Shield,
    Moon,
  } from "lucide-react";
  
  function Settings() {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
            <SettingsIcon size={21} />
          </div>
  
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Settings
            </h1>
  
            <p className="text-sm text-slate-500">
              Manage your StudyAI preferences.
            </p>
          </div>
        </div>
  
        <div className="mt-8 max-w-3xl space-y-5">
          <SettingSection
            icon={User}
            title="Profile"
            description="Manage your personal information."
          >
            <input
              type="text"
              value="Elvis"
              readOnly
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
            />
          </SettingSection>
  
          <SettingSection
            icon={Bell}
            title="Notifications"
            description="Choose how StudyAI notifies you."
          >
            <Toggle
              title="Study reminders"
              description="Receive reminders to study."
              enabled
            />
  
            <Toggle
              title="Quiz reminders"
              description="Get notified about unfinished quizzes."
              enabled
            />
          </SettingSection>
  
          <SettingSection
            icon={Moon}
            title="Appearance"
            description="Customize how StudyAI looks."
          >
            <div className="grid grid-cols-3 gap-3">
              {["Light", "Dark", "System"].map((theme) => (
                <button
                  key={theme}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                    theme === "Light"
                      ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </SettingSection>
  
          <SettingSection
            icon={Shield}
            title="Privacy & Security"
            description="Manage your account security."
          >
            <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
              Change password
            </button>
          </SettingSection>
        </div>
      </div>
    );
  }
  
  function SettingSection({
    icon: Icon,
    title,
    description,
    children,
  }) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Icon size={19} />
          </div>
  
          <div className="flex-1">
            <h2 className="font-semibold text-slate-900">
              {title}
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
  
            <div className="mt-5 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Toggle({
    title,
    description,
    enabled,
  }) {
    return (
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-700">
            {title}
          </p>
  
          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        </div>
  
        <div
          className={`relative h-6 w-11 rounded-full ${
            enabled ? "bg-indigo-600" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow ${
              enabled ? "right-1" : "left-1"
            }`}
          />
        </div>
      </div>
    );
  }
  
  export default Settings;