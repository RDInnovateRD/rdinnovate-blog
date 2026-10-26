// Single source of truth for the blog. Change a value here, not in a page.

export const site = {
  name: 'R&D Innovate',
  url: 'https://blog.rdinnovate.com',
  mainSite: 'https://rdinnovate.com',
  linkedin: 'https://www.linkedin.com/company/rdinnovate/',
  description: 'Daily signal from the cutting edge of research and development.',
  email: 'rd@rdinnovate.com',
  timezone: 'Australia/Sydney',
  signature: 'The R&D Innovate desk',
  feedEntries: 20,
};

// RnD Tax Workbench download page (/workbench/).
// To ship a new release: bump `version` and the filenames, commit, push.
export const workbench = {
  version: '1.2.4',
  // Windows can trail macOS by a release: its link and checksums come from winVersion.
  // Set winVersion equal to version once the Windows build is published.
  winVersion: '1.2.4',
  repo: 'RDInnovateRD/rnd-tax-workbench',
  signedMac: true, // notarised; Gatekeeper accepts
  signedWin: false, // flip once the OV certificate is applied
  macArm: 'RnD-Tax-Workbench-1.2.4-mac-arm64.dmg',
  macX64: 'RnD-Tax-Workbench-1.2.4-mac-x64.dmg',
  windows: 'RnD-Tax-Workbench-1.2.4-win-x64.exe',
  linux: '', // leave empty until a Linux build exists
  upcoming: '', // shows the "coming shortly" note; set to '' to hide it
};

// RnD Tax Workbench NZ download page (/workbench-nz/). Hidden from navigation and search until
// `live` is true; set it in the same commit that publishes the first release.
export const workbenchNz = {
  live: false,
  version: '1.0.0',
  repo: 'RDInnovateRD/rnd-tax-workbench-nz-releases',
  signedMac: true,
  signedWin: false,
  macArm: 'RnD-Tax-Workbench-NZ-1.0.0-mac-arm64.dmg',
  macX64: 'RnD-Tax-Workbench-NZ-1.0.0-mac-x64.dmg',
  windows: 'RnD-Tax-Workbench-NZ-1.0.0-win-x64.exe',
  linuxAppImage: 'RnD-Tax-Workbench-NZ-1.0.0-x86_64.AppImage',
  linuxDeb: 'RnD-Tax-Workbench-NZ-1.0.0-linux-amd64.deb',
};
