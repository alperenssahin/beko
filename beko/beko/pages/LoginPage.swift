//
//  LoginPage.swift
//  beko
//
//  Created by Alperen Şahin on 5.05.2021.
//

import SwiftUI

struct LoginPage: View {
    @Binding var isAuthenticate:Bool
    @State var username = ""
    @State var password = ""
    var body: some View {
        VStack{
            Spacer()
            MyTextField(title: "Username", placeHolder: "ex:alperen", value: $username)
            MyTextField(title: "Password", placeHolder: "1233", value: $password,isPassword: true)
            
            Button(action: {
                if username == "Alperen" && password == "12"{
                    self.isAuthenticate = true
                }
            }, label: {
                HStack{
                    Spacer()
                    Text("Login")
                    Spacer()
                }.padding().background(Color.blue).foregroundColor(.white).cornerRadius(5)
            })
            Spacer()
        }.padding()
    }
}
