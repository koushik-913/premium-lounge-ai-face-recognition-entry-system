import { useState } from 'react';
import { Users, UserPlus, Search, Shield, Crown, Star, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
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

const mockMembers = [
  { id: 'PLM-001', name: 'Alexandra Chen', tier: 'Platinum Elite', status: 'Active', lastEntry: '2024-01-15 14:32' },
  { id: 'PLM-002', name: 'James Whitmore', tier: 'Gold', status: 'Active', lastEntry: '2024-01-15 13:18' },
  { id: 'PLM-003', name: 'Priya Sharma', tier: 'Platinum', status: 'Active', lastEntry: '2024-01-14 09:45' },
  { id: 'PLM-004', name: 'Marcus Delacroix', tier: 'Gold', status: 'Suspended', lastEntry: '2024-01-10 16:22' },
  { id: 'PLM-005', name: 'Yuki Tanaka', tier: 'Platinum Elite', status: 'Active', lastEntry: '2024-01-15 11:05' },
  { id: 'PLM-006', name: 'Sofia Andersen', tier: 'Silver', status: 'Active', lastEntry: '2024-01-13 08:30' },
  { id: 'PLM-007', name: 'Raj Patel', tier: 'Platinum', status: 'Active', lastEntry: '2024-01-15 10:15' },
  { id: 'PLM-008', name: 'Elena Volkov', tier: 'Gold', status: 'Active', lastEntry: '2024-01-14 17:48' },
  { id: 'PLM-009', name: 'Carlos Mendez', tier: 'Silver', status: 'Inactive', lastEntry: '2024-01-08 12:00' },
  { id: 'PLM-010', name: 'Amara Osei', tier: 'Platinum Elite', status: 'Active', lastEntry: '2024-01-15 15:20' },
];

const tierConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  'Platinum Elite': { icon: Crown, color: 'oklch(0.50 0.10 75)', bg: 'oklch(0.92 0.06 75)' },
  'Platinum': { icon: Shield, color: 'oklch(0.45 0.06 240)', bg: 'oklch(0.93 0.04 240)' },
  'Gold': { icon: Star, color: 'oklch(0.55 0.14 80)', bg: 'oklch(0.93 0.06 80)' },
  'Silver': { icon: Shield, color: 'oklch(0.50 0.02 240)', bg: 'oklch(0.93 0.005 240)' },
};

export default function MemberManagement() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newTier, setNewTier] = useState('');
  const [newStatus, setNewStatus] = useState('Active');

  const filtered = mockMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.id.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: 'Total Members', value: mockMembers.length, icon: Users },
    { label: 'Active', value: mockMembers.filter((m) => m.status === 'Active').length, icon: Shield },
    { label: 'Platinum Elite', value: mockMembers.filter((m) => m.tier === 'Platinum Elite').length, icon: Crown },
  ];

  return (
    <div className="min-h-screen pt-16" style={{ background: 'oklch(0.97 0.003 240)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" />
            <span className="section-eyebrow">Member Management</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="section-heading mb-3">
                Premium Member
                <br />
                Registry
              </h1>
              <p className="section-descriptor">
                Manage registered biometric profiles for premium lounge access control.
              </p>
            </div>
            <Button
              onClick={() => setShowAdd(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: 'oklch(0.22 0.06 240)',
                color: 'white',
              }}
            >
              <UserPlus className="w-4 h-4" />
              Add Member
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="premium-card p-6 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'oklch(0.92 0.06 75 / 0.3)' }}
              >
                <Icon className="w-5 h-5" style={{ color: 'oklch(0.55 0.10 75)' }} />
              </div>
              <div>
                <p className="text-2xl font-display font-semibold" style={{ color: 'oklch(0.22 0.06 240)' }}>
                  {value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'oklch(0.55 0.02 240)', letterSpacing: '0.1em' }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="premium-card p-6 mb-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'oklch(0.60 0.02 240)' }} />
            <Input
              placeholder="Search by name or member ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 text-sm"
              style={{ borderColor: 'oklch(0.88 0.008 240)' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="premium-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow style={{ borderColor: 'oklch(0.90 0.008 240)', background: 'oklch(0.97 0.003 240)' }}>
                {['Member ID', 'Name', 'Tier', 'Status', 'Last Entry', ''].map((h) => (
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
              {filtered.map((member) => {
                const tier = tierConfig[member.tier] || tierConfig['Silver'];
                const TierIcon = tier.icon;
                const isActive = member.status === 'Active';
                return (
                  <TableRow
                    key={member.id}
                    className="transition-colors hover:bg-surface"
                    style={{ borderColor: 'oklch(0.93 0.005 240)' }}
                  >
                    <TableCell className="font-mono text-xs py-4" style={{ color: 'oklch(0.45 0.02 240)' }}>
                      {member.id}
                    </TableCell>
                    <TableCell className="font-medium text-sm py-4" style={{ color: 'oklch(0.22 0.06 240)' }}>
                      {member.name}
                    </TableCell>
                    <TableCell className="py-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: tier.bg, color: tier.color }}
                      >
                        <TierIcon className="w-3 h-3" />
                        {member.tier}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: isActive ? 'oklch(0.92 0.08 145)' : 'oklch(0.93 0.005 240)',
                          color: isActive ? 'oklch(0.35 0.15 145)' : 'oklch(0.50 0.02 240)',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: isActive ? 'oklch(0.52 0.18 145)' : 'oklch(0.65 0.02 240)' }}
                        />
                        {member.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs font-mono py-4" style={{ color: 'oklch(0.50 0.02 240)' }}>
                      {member.lastEntry}
                    </TableCell>
                    <TableCell className="py-4">
                      <button className="p-1.5 rounded-lg hover:bg-surface transition-colors">
                        <ChevronRight className="w-4 h-4" style={{ color: 'oklch(0.60 0.02 240)' }} />
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add Member Dialog */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl" style={{ color: 'oklch(0.22 0.06 240)' }}>
              Register New Member
            </DialogTitle>
            <DialogDescription className="text-sm" style={{ color: 'oklch(0.50 0.02 240)' }}>
              Add a new passenger to the premium lounge biometric registry.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5 mt-2">
            <div>
              <Label className="text-xs font-semibold uppercase tracking-wide mb-2 block" style={{ color: 'oklch(0.45 0.02 240)', letterSpacing: '0.1em' }}>
                Full Name
              </Label>
              <Input
                placeholder="e.g. Alexandra Chen"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-xs font-semibold uppercase tracking-wide mb-2 block" style={{ color: 'oklch(0.45 0.02 240)', letterSpacing: '0.1em' }}>
                Membership Tier
              </Label>
              <Select value={newTier} onValueChange={setNewTier}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Platinum Elite">Platinum Elite</SelectItem>
                  <SelectItem value="Platinum">Platinum</SelectItem>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Silver">Silver</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-semibold uppercase tracking-wide mb-2 block" style={{ color: 'oklch(0.45 0.02 240)', letterSpacing: '0.1em' }}>
                Status
              </Label>
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowAdd(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1"
                style={{ background: 'oklch(0.22 0.06 240)', color: 'white' }}
                onClick={() => {
                  setShowAdd(false);
                  setNewName('');
                  setNewTier('');
                  setNewStatus('Active');
                }}
              >
                Register Member
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
