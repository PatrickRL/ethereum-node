<template>
  <div
    class="animate__animated animate__slideInLeft w-full h-full col-start-1 col-span-full items-center grid grid-cols-24 grid-rows-12 absolute"
  >
    <LogsHeader :client="client" @close-log="closeLog" />
    <LogsBody :client="client" />
    <LogsFooter
      :client="client"
      @export-log="exportLog"
      @export-all-log="exportAllLog"
      @export-customized-logs="exportCustomizedLogs"
    />
  </div>
</template>

<script setup>
import LogsHeader from "../components/logs/LogHeader.vue";
import LogsBody from "../components/logs/LogBody.vue";
import LogsFooter from "../components/logs/LogFooter.vue";
// import ControlDialog from "../../the-control/ControlDialog.vue";
// import { useNodeStore } from "@/store/theNode";
// import { useServices } from "@/store/services";
// import { saveAs } from "file-saver";

const { client } = defineProps({
  client: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close-log", "export-log", "export-all-log", "export-customized-logs"]);

const closeLog = () => {
  emit("close-log");
};

const exportLog = (item) => {
  emit("export-log", item);
};

const exportAllLog = (item) => {
  emit("export-all-log", item);
};

const exportCustomizedLogs = (item) => {
  emit("export-customized-logs", item);
};
</script>
