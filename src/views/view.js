import Transfer from "@/components/transfer/Transfer.vue"
export default {
    data() {
      return {
        leftData: [
          { text: "Company", value: 1, sort: "asc" },
          { text: "Employee Name", value: 2, sort: "asc" },
          { text: "Employee No", value: 3, sort: "asc" },
          { text: "Business Unit", value: 4, sort: "asc" },
          { text: "Department", value: 5, sort: "asc" },
          { text: "Group", value: 6, sort: "asc" },
          //{ name: "L5", id: 7, sort: "asc" }
        ],
        rightData: [
          //{ name: "L6", id: 8, sort: "asc" },
          //{ name: "L7", id: 9, sort: "asc" }
        ]
      };
    },
    components: {
      Transfer
    },
    methods: {
      //左右穿梭
      handleTransfer(type, data, callback) {
        if (type == "left") {
          this.rightData = this.rightData.concat(this.leftData[data]);
        } else {
          this.leftData = this.leftData.concat(this.rightData[data]);
        }
        this[type + "Data"].splice(data, 1);
        callback(type);
      },
      //上下排序
      handleSort(type, sortType, data, callback) {
        if (!sortType || sortType == "right") {
          if (type == "up") {
            this.rightData = this.swapItems(this.rightData, data[1], data[1] - 1);
            callback(sortType, [data[0], data[1] - 1]);
          } else {
            this.rightData = this.swapItems(this.rightData, data[1], data[1] + 1);
            callback(sortType, [data[0], data[1] + 1]);
          }
        } else if (sortType == "left") {
          if (type == "up") {
            this.leftData = this.swapItems(this.leftData, data[0], data[0] - 1);
            callback(sortType, [data[0] - 1, data[1]]);
          } else {
            this.leftData = this.swapItems(this.leftData, data[0], data[0] + 1);
            callback(sortType, [data[0] + 1, data[1]]);
          }
         } 

         //both的bug，未将空数组判断，回调时的处理不当
        //else if (sortType == "both") {
        //   if (type == "up") {
        //     data[0] == 0
        //       ? ""
        //       : (this.leftData = this.swapItems(
        //           this.leftData,
        //           data[0],
        //           data[0] - 1
        //         ));
        //     data[1] == 0
        //       ? ""
        //       : (this.rightData = this.swapItems(
        //           this.rightData,
        //           data[1],
        //           data[1] - 1
        //         ));
        //     callback(sortType, [
        //       data[0] == 0 ? data[0] : data[0] - 1,
        //       data[1] == 0 ? data[1] : data[1] - 1
        //     ]);
        //   } else {
        //     data[0] == this.leftData.length - 1
        //       ? ""
        //       : (this.leftData = this.swapItems(
        //           this.leftData,
        //           data[0],
        //           data[0] + 1
        //         ));
        //     data[1] == this.rightData.length - 1
        //       ? ""
        //       : (this.rightData = this.swapItems(
        //           this.rightData,
        //           data[1],
        //           data[1] + 1
        //         ));
        //     callback(sortType, [
        //       data[0] == this.leftData.length - 1 ? data[0] : data[0] + 1,
        //       data[1] == this.rightData.length - 1 ? data[1] : data[1] + 1
        //     ]);
        //   }
        // }
      },
      swapItems(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
      }
    }
  };