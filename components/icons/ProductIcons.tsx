import React from "react";
import {
  ChartBar,
  Shield,
  Code,
  Lightning,
  Globe,
  FileText,
  Clock,
  ArrowsOutCardinal,
} from "@phosphor-icons/react";

export function BarChartIcon() {
  return <ChartBar className="w-5 h-5" weight="regular" />;
}

export function ShieldIcon() {
  return <Shield className="w-5 h-5" weight="regular" />;
}

export function CodeIcon() {
  return <Code className="w-5 h-5" weight="regular" />;
}

export function LightningIcon() {
  return <Lightning className="w-5 h-5" weight="regular" />;
}

export function GlobeIcon() {
  return <Globe className="w-5 h-5" weight="regular" />;
}

export function DocumentIcon() {
  return <FileText className="w-5 h-5" weight="regular" />;
}

export function ClockIcon() {
  return <Clock className="w-5 h-5" weight="regular" />;
}

export function MultiChainIcon() {
  return <ArrowsOutCardinal className="w-5 h-5" weight="regular" />;
}
