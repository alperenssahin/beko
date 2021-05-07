//
//  Homepage.swift
//  beko
//
//  Created by Alperen Şahin on 5.05.2021.
//

import SwiftUI

struct Homepage: View {
    @State var selectedUserString = "";
    @State var selectedUserList:[User] = []
    let userArray:[User] = [User("Alperen"), User("Bektas"), User("Imge")];
    var body: some View {
        NavigationView{
            VStack{
                HStack{
                    ForEach(selectedUserList,id:\.id){ element in
                        UserBadge(user: element, buttonHandler: buttonHandler)
                    }
                }
                
                Text("\(selectedUserString)")
                ForEach(userArray,id:\.id){ element in
                    UserItem(user: element, buttonHandler: buttonHandler)
                }
                
            }.navigationTitle("Home")
        }
    }
    
    func buttonHandler(_ name:User) -> Void {
        if !selectedUserList.contains(name){
            selectedUserList.append(name)
        }else{
            if let index = selectedUserList.firstIndex(of: name){
                selectedUserList.remove(at: index)
            }
        }
//        selectedUserString = selectedUserList.joined(separator: ", ")
    }
}



struct UserItem: View {
    var user:User
    var buttonHandler:(User)->Void
    var body: some View {
        Button(action: {buttonHandler(user)}, label: {
            VStack{
                Text(user.name).font(.body).padding()
            }
        })
    }
}

struct UserBadge: View {
    var user:User
    var buttonHandler:(User)->Void
    var body: some View {
        Button(action: {buttonHandler(user)}, label: {
            Text(user.name).padding().background(Color.red).foregroundColor(.white)
        })
    }
}

class User:Equatable{
    static func == (lhs: User, rhs: User) -> Bool {
        return lhs.id == rhs.id
    }
    
    let id = UUID()
    let name:String
    init(_ name:String){
        self.name = name
    }
}
