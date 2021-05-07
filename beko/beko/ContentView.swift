//
//  ContentView.swift
//  beko
//
//  Created by Alperen Şahin on 5.05.2021.
//

import SwiftUI

struct ContentView: View {
    @State var isAuthenticate = true
    
    var body: some View {
        VStack{
            if isAuthenticate{
                Homepage()
            }else{
                LoginPage(isAuthenticate:$isAuthenticate)
            }
        }
    }
}


