import { useState } from 'react';
import { CheckCircle2, XCircle, Filter, Download, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const mockLogs = [
  { id: 'LOG-001', timestamp: '2024-01-15 15:32:14', passenger: 'Alexandra Chen', tier: 'Platinum Elite', confidence: 98.7, gate: 'A12', result: 'Granted' },
  { id: 'LOG-002', timestamp: '2024-01-15 15:28:03', passenger: 'Yuki Tanaka', tier: 'Platinum Elite', confidence: 97.2, gate: 'A12', result: 'Granted' },
  { id: 'LOG-003', timestamp: '2024-01-15 15:21:47', passenger: 'Unknown', tier: '—', confidence: 34.1, gate: 'A12', result: 'Denied' },
  { id: 'LOG-004', timestamp: '2024-01-15 15:15:22', passenger: 'Raj Patel', tier: 'Platinum', confidence: 95.8, gate: 'B04', result: 'Granted' },
  { id: 'LOG-005', timestamp: '2024-01-15 15:09:11', passenger: 'James Whitmore', tier: 'Gold', confidence: 91.3, gate: 'A12', result: 'Granted' },
  { id: 'LOG-006', timestamp: '2024-01-15 14:58:39', passenger: 'Unknown', tier: '—', confidence: 28.6, gate: 'B04', result: 'Denied' },
  { id: 'LOG-007', timestamp: '2024-01-15 14:45:02', passenger: 'Amara Osei', tier: 'Platinum Elite', confidence: 99.1, gate: 'A12', result: 'Granted' },
  { id: 'LOG-008', timestamp: '2024-01-15 14:38:55', passenger: 'Elena Volkov', tier: 'Gold', confidence: 88.4, gate: 'C01', result: 'Granted' },
  { id: 'LOG-009', timestamp: '2024-01-15 14:22:18', passenger: 'Marcus Delacroix', tier: 'Gold', confidence: 92.7, gate: 'A12', result: 'Denied' },
  { id: 'LOG-010', timestamp: '2024-01-15 14:15:44', passenger: 'Priya Sharma', tier: 'Platinum', confidence: 96.5, gate: 'B04', result: 'Granted' },
  { id: 'LOG-011', timestamp: '2024-01-15 14:08:31', passenger: 'Sofia Andersen', tier: 'Silver', confidence: 89.2, gate: 'C01', result: 'Granted' },
  { id: 'LOG-012', timestamp: '2024-01-15 13:55:07', passenger: 'Unknown', tier: '—', confidence: 41.8, gate: 'A12', result: 'Denied' },
];

export default function EntryLogs() {
  const [resultFilter, setResultFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  const filtered = mockLogs.filter((log) => {
    const matchResult = resultFilter === 'all' || log.result.toLowerCase() === resultFilter;
    const matchDate = !dateFilter || log.timestamp.includes(dateFilter);
    return matchResult && matchDate;
  });

  const granted = mockLogs.filter((l) => l.result === 'Granted').length;
  const denied = mockLogs.filter((l) => l.result === 'Denied').length;
  const avgConf = (mockLogs.reduce((s, l) => s + l.confidence, 0) / mockLogs.length).toFixed(1);

  const stats = [
    { label: 'Total Events', value: mockLogs.length, icon: TrendingUp, color: 'oklch(0.22 0.06 240)' },
    { label: 'Access Granted', value: granted, icon: ShieldCheck, color: 'oklch(0.52 0.18 145)' },
    { label: 'Access Denied', value: denied, icon: XCircle, color: 'oklch(0.55 0.22 25)' },
    { label: 'Avg Confidence', value: `${avgConf}%`, icon: Users, color: 'oklch(0.55 0.10 75)' },
  ];

  return (
    <div className="min-h-screen pt-16" style={{ background: 'oklch(0.97 0.003 240)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" />
            <span className="section-eyebrow">Entry Logs</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="section-heading mb-3">
                Access Event
                <br />
                Audit Log
              </h1>
              <p className="section-descriptor">
                Complete record of all lounge entry attempts with biometric verification results.
              </p>
            </div>
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-colors hover:bg-surface"
              style={{ borderColor: 'oklch(0.88 0.008 240)', color: 'oklch(0.45 0.02 240)' }}
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="premium-card p-5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color.replace(')', ' / 0.1)')}` }}
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

        {/* Filters */}
        <div className="premium-card p-5 mb-6 flex flex-wrap items-center gap-4">
          <Filter className="w-4 h-4" style={{ color: 'oklch(0.60 0.02 240)' }} />
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'oklch(0.45 0.02 240)', letterSpacing: '0.1em' }}>
            Filters
          </span>
          <div className="flex flex-wrap gap-3 ml-2">
            <Select value={resultFilter} onValueChange={setResultFilter}>
              <SelectTrigger className="w-36 text-sm">
                <SelectValue placeholder="All Results" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Results</SelectItem>
                <SelectItem value="granted">Granted</SelectItem>
                <SelectItem value="denied">Denied</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-40 text-sm"
            />
          </div>
          <span className="ml-auto text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>
            {filtered.length} of {mockLogs.length} events
          </span>
        </div>

        {/* Table */}
        <div className="premium-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow style={{ borderColor: 'oklch(0.90 0.008 240)', background: 'oklch(0.97 0.003 240)' }}>
                {['Log ID', 'Timestamp', 'Passenger', 'Tier', 'Confidence', 'Gate', 'Result'].map((h) => (
                  <TableHead
                    key={h}
                    className="text-xs font-semibold uppercase tracking-wide py-4"
                    style={{ color: 'oklch(0.45 0.02 240)', letterSpacing: '0.1em' }}
                  >
                    {h}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((log) => {
                const isGranted = log.result === 'Granted';
                return (
                  <TableRow
                    key={log.id}
                    className="transition-colors hover:bg-surface"
                    style={{ borderColor: 'oklch(0.93 0.005 240)' }}
                  >
                    <TableCell className="font-mono text-xs py-4" style={{ color: 'oklch(0.45 0.02 240)' }}>
                      {log.id}
                    </TableCell>
                    <TableCell className="font-mono text-xs py-4" style={{ color: 'oklch(0.50 0.02 240)' }}>
                      {log.timestamp}
                    </TableCell>
                    <TableCell className="text-sm font-medium py-4" style={{ color: 'oklch(0.22 0.06 240)' }}>
                      {log.passenger}
                    </TableCell>
                    <TableCell className="text-xs py-4" style={{ color: 'oklch(0.50 0.02 240)' }}>
                      {log.tier}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-1.5 w-16 rounded-full overflow-hidden"
                          style={{ background: 'oklch(0.93 0.005 240)' }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${log.confidence}%`,
                              background: log.confidence > 80
                                ? 'oklch(0.52 0.18 145)'
                                : log.confidence > 60
                                ? 'oklch(0.75 0.12 75)'
                                : 'oklch(0.55 0.22 25)',
                            }}
                          />
                        </div>
                        <span className="text-xs font-mono" style={{ color: 'oklch(0.45 0.02 240)' }}>
                          {log.confidence}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs font-mono py-4" style={{ color: 'oklch(0.50 0.02 240)' }}>
                      {log.gate}
                    </TableCell>
                    <TableCell className="py-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: isGranted ? 'oklch(0.92 0.08 145)' : 'oklch(0.94 0.08 25)',
                          color: isGranted ? 'oklch(0.35 0.15 145)' : 'oklch(0.40 0.18 25)',
                        }}
                      >
                        {isGranted ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        {log.result}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
