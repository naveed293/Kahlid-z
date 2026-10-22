import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bone,
  Brain,
  CalendarCheck,
  ClipboardList,
  Droplets,
  HeartHandshake,
  HelpCircle,
  Hospital,
  Layers,
  Network,
  Siren,
  Stethoscope,
  Workflow,
} from 'lucide-react';

const registry = {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bone,
  Brain,
  CalendarCheck,
  ClipboardList,
  Droplets,
  HeartHandshake,
  HelpCircle,
  Hospital,
  Layers,
  Network,
  Siren,
  Stethoscope,
  Workflow,
};

/**
 * Resolves an icon name (from a data file) to a Lucide icon component.
 * Falls back to HelpCircle when the name is unknown.
 */
export default function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const Glyph = registry[name] || HelpCircle;
  return <Glyph className={className} aria-hidden="true" {...rest} />;
}
