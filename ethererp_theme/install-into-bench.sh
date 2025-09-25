#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BENCH_DIR="${1:-$HOME/frappe-bench}"

echo "Copying ethererp_theme into $BENCH_DIR/apps ..."
mkdir -p "$BENCH_DIR/apps"
rsync -a --delete "$APP_DIR" "$BENCH_DIR/apps/"

echo "Done. Next steps:"
echo "  cd $BENCH_DIR"
echo "  bench --site erp.circuitauto.co.za install-app ethererp_theme"
echo "  bench --site erp.circuitauto.co.zw install-app ethererp_theme"
echo "  # (optional) for shops when ready"
echo "  # bench --site shop.circuitauto.co.za install-app ethererp_theme"
echo "  # bench --site shop.circuitauto.co.zw install-app ethererp_theme"
echo "  bench build && bench restart"
