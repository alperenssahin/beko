//
//  MyTextField.swift
//  beko
//
//  Created by Alperen Şahin on 5.05.2021.
//

import SwiftUI

struct MyTextField: View {
    let title:String
    let placeHolder:String
    @Binding var value:String
    var isPassword  = false
    @State var secureView = true
    var body: some View {
        VStack(alignment:.leading){
            Text(title).bold()
            Divider()
            if isPassword{
                HStack{
                    if secureView{
                        SecureField(placeHolder, text: $value)
                    }else{
                        TextField(placeHolder, text: $value)
                    }
                    Button(action: {self.secureView.toggle()}, label: {
                        Image(systemName: self.secureView ? "eye" : "eye.slash")
                    })
                    
                }
            }else{
                TextField(placeHolder, text: $value)
            }
        }.padding().background(Color("input-background")).cornerRadius(5)
    }
}
