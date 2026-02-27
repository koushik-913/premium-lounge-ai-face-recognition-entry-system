import { Activity, Camera, Cpu, Database, TrendingUp, ShieldCheck, XCircle, BarChart3 } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const hourlyData = [
  { hour: '06:00', entries: 12 },
  { hour: '07:00', entries: 28 },
  { hour: '08:00', entries: 45 },
  { hour: '09:00', entries: 38 },
  { hour: '10:00', entries: 52 },
  { hour: '11:00', entries: 41 },
  { hour: '12:00', entries: 35 },
  { hour: '13:00', entries: 29 },
  { hour: '14:00', entries: 48 },
  { hour: '15:00', entries: 61 },
  { hour: '16:00', entries: 44 },
  { hour: '17:00', entries: 33 },
];

const systemComponents = [
  {
    icon: Camera,
    name: 'Entry Camera System',
    status: 'Operational',
    uptime: '99.97%',
    detail: '4K · 60fps · HDR Active',
    health: 99,
  },
  {
    icon: Cpu,
    name: 'AI Recognition Engine',
    status: 'Operational',
    uptime: '99.94%',
    detail: 'Neural Net v4.2 · GPU Accelerated',
    health: 97,
  },
  {
    icon: Database,
    name: 'Member Database',
    status: 'Operational',
    uptime: '100%',
    detail: '10,240 Profiles · Encrypted',
    health: 100,
  },
];

const metrics = [
  { label: 'Total Entries Today', value: '466', icon: TrendingUp, color: 'oklch(0.22 0.06 240)' },
  { label: 'Access Granted', value: '421', icon: ShieldCheck, color: 'oklch(0.52 0.18 145)' },
  { label: 'Access Denied', value: '45', icon: XCircle, color: 'oklch(0.55 0.22 25)' },
  { label: 'Avg Confidence', value: '94.2%', icon: BarChart3, color: 'oklch(0.55 0.10 75)' },
];

export default function SecuritySystemStatus() {
  return (
    <div className="min-h-screen pt-16" style={{ background: 'oklch(0.97 0.003 240)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" />
            <span className="section-eyebrow">Security & System Status</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="section-heading mb-3">
                System Health
                <br />
                & Security Dashboard
              </h1>
              <p className="section-descriptor">
                Real-time monitoring of all lounge access control system components and performance metrics.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'oklch(0.92 0.08 145)', color: 'oklch(0.35 0.15 145)' }}>
              <Activity className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* System Components */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {systemComponents.map((comp) => {
            const Icon = comp.icon;
            return (
              <div key={comp.name} className="premium-card p-6 flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'oklch(0.92 0.06 75 / 0.3)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'oklch(0.55 0.10 75)' }} />
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'oklch(0.92 0.08 145)', color: 'oklch(0.35 0.15 145)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    {comp.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: 'oklch(0.22 0.06 240)' }}>
                    {comp.name}
                  </h3>
                  <p className="text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>
                    {comp.detail}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: 'oklch(0.55 0.02 240)' }}>
                      System Health
                    </span>
                    <span className="text-xs font-bold" style={{ color: 'oklch(0.52 0.18 145)' }}>
                      {comp.health}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'oklch(0.93 0.005 240)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${comp.health}%`, background: 'oklch(0.52 0.18 145)' }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t" style={{ borderColor: 'oklch(0.93 0.005 240)' }}>
                  <span className="text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>Uptime</span>
                  <span className="text-xs font-mono font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                    {comp.uptime}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {metrics.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="premium-card p-5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'oklch(0.97 0.003 240)' }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <div>
                <p className="text-xl font-display font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  {value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'oklch(0.55 0.02 240)', letterSpacing: '0.08em' }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="premium-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="gold-divider" />
                <span className="section-eyebrow text-xs">Peak Hours Analysis</span>
              </div>
              <h3 className="text-lg font-display font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                Hourly Entry Volume
              </h3>
            </div>
            <span className="text-xs font-mono" style={{ color: 'oklch(0.55 0.02 240)' }}>
              Today · Jan 15, 2024
            </span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={hourlyData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.93 0.005 240)" vertical={false} />
              <XAxis
                dataKey="hour"
                tick={{ fontSize: 11, fill: 'oklch(0.55 0.02 240)' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: 'oklch(0.55 0.02 240)' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: 'white',
                  border: '1px solid oklch(0.90 0.008 240)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px oklch(0.15 0.02 240 / 0.1)',
                  fontSize: '12px',
                }}
                cursor={{ fill: 'oklch(0.97 0.003 240)' }}
              />
              <Bar
                dataKey="entries"
                fill="oklch(0.22 0.06 240)"
                radius={[6, 6, 0, 0]}
                name="Entries"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
