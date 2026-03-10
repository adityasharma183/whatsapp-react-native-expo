import { MMKV } from "react-native-mmkv";

let storage: MMKV | null = null;

try {
  storage = new MMKV();
} catch (e) {
  console.log("MMKV not available in this runtime");
}

export { storage };