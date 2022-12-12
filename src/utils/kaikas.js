const provider = window?.klaytn;

export async function isKaikasAvailable() {
  if (!provider) {
    return false;
  }
  const results = await Promise.all([
    provider._kaikas.isApproved(),
    provider._kaikas.isEnabled(),
    provider._kaikas.isUnlocked(),
  ]);
  return results.every((res) => res);
}
