import type { Pattern } from "@prisma/client";

const validations = {
	gauge: (record: Pattern) => {
		const hasGauge =
			record.gaugeRows || record.gaugeStitches || record.gaugeSizeInCm;
		const missingGaugeFields =
			!record.gaugeRows || !record.gaugeStitches || !record.gaugeSizeInCm;
		if (hasGauge && missingGaugeFields) {
			return {
				name: "Incomplete gauge",
				message: "Gauge data must include stitches, rows, and size",
			};
		}
		return true;
	},
	meterage: (record: Pattern) => {
		if (record.meterage.length === 0) return true;
		if (record.meterage.length === 1) {
			return {
				name: "Incomplete meterage values",
				message: "Meterage must include minimum and maximum",
			};
		}
		if (record.meterage.length > 2) {
			return {
				name: "Wrong number of meterage values",
				message: "Meterage must include exactly two values",
			};
		}
		if (record.meterage[0] > record.meterage[1]) {
			return {
				name: "Invalid meterage values",
				message: "Minimum meterage value cannot exceed maximum",
			};
		}
		return true;
	},
};
