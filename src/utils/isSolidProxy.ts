import { $PROXY } from "solid-js";

export type JudgeObjProxy = (obj: any) => boolean;

const JudgeObjProxySet = new Set<JudgeObjProxy>();
JudgeObjProxySet.add((obj) => $PROXY in obj);

export function addJustObjProxyList(fn: JudgeObjProxy) {
  JudgeObjProxySet.add(fn);
}

export function removeJustObjProxyList(fn: JudgeObjProxy) {
  JudgeObjProxySet.delete(fn);
}

export function isProxy(obj: any): boolean {
  for (const judgeObjProxy of JudgeObjProxySet) {
    if (judgeObjProxy(obj)) {
      return true;
    }
  }
  return false;
}
