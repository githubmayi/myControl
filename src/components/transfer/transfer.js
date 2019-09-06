export default {
    data() {
        return {
            left: "",
            right: ""
        };
    },
    computed: {
        upActive() {
            return !this.sortType || this.sortType == "right"
                ? this.right
                : this.sortType == "left"
                    ? this.left
                    : this.left || this.right;
        },
        downActive() {
            let con = false;
            if (!this.sortType || this.sortType == "right") {
                con =
                    (this.right || this.right === 0) &&
                    this.right !== this.rightData.length - 1;
            } else if (this.sortType == "left") {
                con =
                    (this.left || this.left === 0) &&
                    this.left !== this.leftData.length - 1;
            } else {
                con =
                    ((this.right || this.right === 0) &&
                        this.right !== this.rightData.length - 1) ||
                    ((this.left || this.left === 0) &&
                        this.left !== this.leftData.length - 1);
            }
            return con;
        }
    },
    props: ["leftData", "rightData", "titles", "sortType"],
    methods: {
        // 穿梭的回调
        transferData(type) {
            this.$emit("transfer", type, this[type], this.callback);
        },
        // 选中的索引置空
        callback(type) {
            this.cancel(type);
        },
        cancel(type) {
            if (type == "both") {
                this.left = "";
                this.right = "";
            } else {
                this[type] = "";
            }
        },
        // 排序的回调
        handleSort(type) {
            let data = [this.left, this.right];
            this.$emit("handleSort", type, this.sortType, data, this.handleNewSort);
        },
        handleNewSort(sortType, array) {
            if (!sortType || sortType == "right") {
                this.right = array[1];
            } else if (sortType == "left") {
                this.left = array[0];
            } else if (sortType == "both") {
                this.left = array[0];
                this.right = array[1];
            }
        },
        //选中的项赋值改变它的sort
        sortItem(obj) {
            if (obj.sort === "desc") {
                obj.sort = "asc";
                //打印当前项的排序
                console.log(obj.sort);
            } else {
                obj.sort = "desc";
                console.log(obj.sort);
            }
        },
        //如果选中该div则让该div背景高亮并且填充到
        selectItem (obj, index, type) {
            if (obj != null) {
                switch (type) {
                    case 'left':
                            for (let i = 0; i <= this.leftData.length; i++) {
                                try {
                                    if (index === i) {
                                        document.getElementById('content-box-itemL' + i).style.background = "#409EFF";
                                        document.getElementById('content-box-itemL' + i).style.fontSize = "18px";
                                        document.getElementById('content-box-itemL' + i).style.fontWeight = "500";
                                        document.getElementById('content-box-itemL' + i).style.borderRadius = "6px";
                                        this.left = index;
                                    }
                                    else {
                                        document.getElementById("content-box-itemL" + i).style.background = "#FFFFFF";
                                        document.getElementById('content-box-itemL' + i).style.fontSize = "16px";
                                        document.getElementById('content-box-itemL' + i).style.fontWeight = "400";
                                    }
                                } catch (error) {
                                    
                                }
                            }
                        break;
                
                    default:
                            for (let i = 0; i <= this.leftData.length; i++) {
                                try {
                                    if (index === i) {
                                        document.getElementById('content-box-itemR' + i).style.background = "#409EFF";
                                        document.getElementById('content-box-itemR' + i).style.fontSize = "18px";
                                        document.getElementById('content-box-itemR' + i).style.fontWeight = "500";
                                        document.getElementById('content-box-itemR' + i).style.borderRadius = "6px";
                                        this.right = index;
                                    }
                                    else {
                                        document.getElementById("content-box-itemR" + i).style.background = "#FFFFFF";
                                        document.getElementById('content-box-itemR' + i).style.fontSize = "16px";
                                        document.getElementById('content-box-itemR' + i).style.fontWeight = "400";
                                    }
                                } catch (error) {
                                    
                                }
                            }
                        break;
                }
            }
        },
    }
};