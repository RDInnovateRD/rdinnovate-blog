// Single source of truth for the blog. Change a value here, not in a page.

export const site = {
  name: 'R&D Innovate',
  url: 'https://blog.rdinnovate.com',
  mainSite: 'https://rdinnovate.com',
  description: 'Daily signal from the cutting edge of research and development.',
  email: 'rd@rdinnovate.com',
  timezone: 'Australia/Sydney',
  signature: 'The R&D Innovate desk',
  feedEntries: 20,
};

// RnD Tax Workbench download page (/workbench/).
// To ship a new release: bump `version` and the filenames, commit, push.
export const workbench = {
  version: '1.2.0',
  // Windows can trail macOS by a release: its link and checksums come from winVersion.
  // Set winVersion equal to version once the Windows build is published.
  winVersion: '1.1.0',
  repo: 'RDInnovateRD/rnd-tax-workbench',
  signedMac: true, // notarised; Gatekeeper accepts
  signedWin: false, // flip once the OV certificate is applied
  macArm: 'RnD-Tax-Workbench-1.2.0-mac-arm64.dmg',
  macX64: 'RnD-Tax-Workbench-1.2.0-mac-x64.dmg',
  windows: 'RnD-Tax-Workbench-1.1.0-win-x64.exe',
  linux: '', // leave empty until a Linux build exists
  upcoming: '', // shows the "coming shortly" note; set to '' to hide it
};
