javascript:(
    function(){
        // Restyle
        let main = document.querySelector("main");
        // สร้่าง Div ขึ้นมาใหม่
        let newDiv = document.createElement("div");
        newDiv.id = "grid";
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "row";
        main.firstChild.after(newDiv);
        // ขยับช่องให้คะแนน และ เวลาส่งงานขึ้นมาด้านบน เพื่อให้สามารถหด Sidebar ได้
        let gradeDiv = document.querySelector("div[jsname=QjIALd]");
        gradeDiv.style.padding = 0;
        gradeDiv.style.flexGrow = 1;
        gradeDiv.style.flexShrink = 0;
        gradeDiv.style.flexBasis = "auto";
        gradeDiv.style.display = "flex";
        gradeDiv.style.flexDirection = "row";
        // สร้าง Div ภายใน gradeDiv อีกอัน
        let newGradeDiv = document.createElement("div");
        newGradeDiv.style.padding = "12px";
        let gradeH3 = gradeDiv.querySelector("h3");
        newGradeDiv.prepend(gradeH3);
        newGradeDiv.append(document.querySelector("[jscontroller=WPsbnb]")) // Div บอกเวลาส่งงาน
        gradeDiv.prepend(newGradeDiv);
        // Append Div แสดงไฟล์ทั้งหมด
        newDiv.append(gradeDiv);
        newDiv.append(document.querySelector("[jsname=XkqTFd]"));
        document.querySelector("[jscontroller=WPsbnb]")
        // ซ่อน
        document.querySelector("[jsname=B34EJ]").style.display = "none";
        // Keyboard Shortcut
        let hasBeenNavigated = false;
        let gradebox = document.querySelector("input[jsname=YPqjbf]");

        let windowOnBlur = (e)=>{
            if(hasBeenNavigated){
                
                if(document.activeElement.tagName.toLowerCase()=== 'iframe'){
                    // Steal Focus Back
                    setTimeout(()=>{
                        document.activeElement.blur();
                        gradebox.focus();
                    },1000)

                    hasBeenNavigated = false;
                }
            }
        }
        window.addEventListener('blur', windowOnBlur, true);
        alert("Google Classroom Keyboard Shortcut\r\nกด < เพื่อไปยังคนก่อนหน้า \r\nกด > เพื่อยังคนถัดไป \r\nกด X เพื่อโฟกัสช่องให้คะแนน \r\nกด Z เพื่อยกเลิกโฟกัสช่องให้คะแนน")
        
        document.onkeyup = (e)=>{
            switch(e.which){
            case 37: // Left-Arrow
            document.querySelector("div[jsname=m5pO5d]").click();
            hasBeenNavigated = true;
            break;
            case 39: // Right-Arrow
            document.querySelector("div[jsname=KwmAGc]").click();
            hasBeenNavigated = true;
            break;
            case 88: // X button
            gradebox.focus();
            break;
            case 90: // X button
            gradebox.blur();
            break;
            }
        }
    }
)()